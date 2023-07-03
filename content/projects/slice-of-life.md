---
title: "Slice of Life"
date: 2023-07-03T12:21:43-07:00
draft: true
---

> Source Code: https://github.com/orgs/slice-of-life/repositories

### Project management

During a project management course that I took in my final year of college, I, along with a team, had to come up with a project that we would need to manage. The management course did not require to project to actually be completed, only artifact that demonstrate that the project could be successfully managed. However, a couple of team members decided the project idea sounded interesting enough and took a shot and implementing the project.

As the project was considerably larger than anything that I have worked on before, it was split into 2 major component: a front facing webapp and a backend API. In a nutshell, the frontend webapp provided a user interface that provided access to the application through a web browser. The backend API provided services to create, modify, and retrieve data from a database. This separation of concerns was more in line with what occurs with projects of this complexity and larger.

In the end, a prototype frontend provides the web interface that was the start of the envisioned product. The backend API provided several features that the frontend used to display data in the pretty way for normal users. The API program is more complete than the frontend webapp, but is fully tested. This is a result of a dependency that the frontend webapp required. It would of course not function without a working API to call and retrieve data from.

This project exposed me to several new things. In particular, database schema management and API architecture. It is here that I discovered popular ways to build backend services. For this project, the monolithic approach was taken. Additionally, many new software packages were employed to ensure that the overall project was implemented in a timely manner and that small, complex details were not our concern.
