# -*- coding: utf-8 -*-
"""Calculo aproximado del Índice de Sinceridad (MCMI-III).

Este script suma las puntuaciones directas de las escalas 1 a 8B y
obtiene un índice BR aproximado. Si la suma queda fuera del rango
34-178 el resultado se considera inválido.

El cálculo del BR se realiza con una transformación lineal sencilla y
no pretende sustituir las tablas oficiales del test.
"""
from __future__ import annotations

from typing import Iterable

RANGO_MIN = 34
RANGO_MAX = 178
MEDIA = (RANGO_MIN + RANGO_MAX) / 2

# Factor lineal para trasladar la desviación del rango al índice BR
FACTOR_BR = 0.6


def calcular_br_sinceridad(puntajes: Iterable[float]) -> float:
    """Calcula un BR aproximado del índice X Sinceridad.

    `puntajes` debe contener once valores correspondientes a
    las escalas 1 Esquizoide a 8B Autodestructiva.
    """
    total = sum(puntajes)
    if total < RANGO_MIN or total > RANGO_MAX:
        raise ValueError(
            f"Protocolo inválido: suma {total} fuera del rango {RANGO_MIN}-{RANGO_MAX}"
        )
    br = 60 + (total - MEDIA) * FACTOR_BR
    return round(br, 2)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Calcula el índice de Sinceridad")
    parser.add_argument(
        "puntajes",
        nargs=11,
        type=float,
        metavar="P",
        help="Puntuaciones directas de las escalas 1 a 8B",
    )
    args = parser.parse_args()
    try:
        br = calcular_br_sinceridad(args.puntajes)
    except ValueError as exc:
        print(exc)
    else:
        print(f"BR Sinceridad aproximado: {br}")
