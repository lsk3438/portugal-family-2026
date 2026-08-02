#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Portugal Family Trip 2026 — générateur local (équivalent de build.mjs).

Usage :
    python3 build.py

Assemble src/index.template.html + src/style.css + src/trip.js + src/app.js
+ src/images.json en un seul fichier autonome : index.html
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")


def read(p):
    with open(p, "r", encoding="utf-8") as f:
        return f.read()


def main():
    template = read(os.path.join(SRC, "index.template.html"))
    css = read(os.path.join(SRC, "style.css"))
    trip = read(os.path.join(SRC, "trip.js"))
    app = read(os.path.join(SRC, "app.js"))
    with open(os.path.join(SRC, "images.json"), "r", encoding="utf-8") as f:
        images = json.load(f)

    data = "const IMAGES = " + json.dumps(images, ensure_ascii=False) + ";\n" + trip

    html = (template
            .replace("/*__CSS__*/", css)
            .replace("/*__DATA__*/", data)
            .replace("/*__APP__*/", app))

    out = os.path.join(ROOT, "index.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)

    print("  index.html généré — %.0f Ko" % (os.path.getsize(out) / 1024))
    return 0


if __name__ == "__main__":
    sys.exit(main())
