---
title: "Scientific Calculator"
date: 2023-07-03T11:55:58-07:00
draft: true
---

> Source Code: https://github.com/nathancmendoza/PyCalc

### Using new skills

The first real programming project that I decided to build outside of my course work was a calculator. This would eventually end up being a scientific calculator. By including functions like trigonometry and roots, this projects differs from the more straight forward desk calculator that one might find. Additionally, this project would also be my first experience with complex GUI creation.

I began working on this project during the summer between my first and second year of college. By this point, I had finished my introductory and intermediate programming coursework. It was at this point that I felt ready to build a project completely on my own.

The scientific calculator project would present some challenges that I would need to work around with my limited knowledge and experience. For example, the parsing and evaluating of mathematical expression containing tokens other than numbers and operators would be hanlded with raw string substitution and use of python's `eval` function to do most of the heavy lifting.

Building a GUI for this project was also a challenge. Layout of the widgets was by far the simplest part of the build. The most interesting thing that occurred was for some reason, my buttons all did the same thing, despite me being sure that I set them to do different things. To fix this, it required use of functions that define functions to ensure the button behavior was separated.

Despite the challenges, I believe that I was successful with this project because I employed unit testing to ensure the each component functioned as expected. This greatly increased my confindents as I sowed the individual logical pieces together and the entire thing did not break. Although this was the first substantial project that I built on my own time, this gave me the oppurtunity to use the knowledge and skills that I picked up in the introductory programming courses in a practical manner.
