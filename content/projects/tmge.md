---
title: "Tmge"
date: 2023-07-03T12:49:38-07:00
draft: true
---

> Source Code: https://github.com/orgs/inf122-tmge-winter-2023/repositories

### Advanced software design project

This project involved designing a software library that could be used to build tile matching games. The library needed to be extensible to cover both real-time and turn-based tile matching games. The final application needed to support multiplayer versions of tile-matching games, and provide a way to determine a winner and loser of each match.

This project was designed and implemented completely with in-house software. No third party packages were used to minimize external dependencies. This was intended as there was no package available that could be helpful without trivially implementing the project. It would deprive me of any design decisions of my own.

Working on this project provided an oppurtunity to exercise the implementation of popular software patterns. From memory, the patterns used included the following

- [Template](https://en.wikipedia.org/wiki/Template_method_pattern)
- [Builder](https://en.wikipedia.org/wiki/Builder_pattern)
- [Factory](https://en.wikipedia.org/wiki/Factory_method_pattern)

These are a few of the patterns utilized in the project. Use of these patterns made it possible to both real-time and turn-based tilematching games to be created using the software library. To demonstrate the feasibility, two tile matching games were created using the library. One game (columns) is real-time and the other (candy crush) is a turn-based game. These games were the two games made available is the final multiplayer application.
