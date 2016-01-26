| IRIN | AIML | description |
|------|------|-------------|
| (not require) | `<aiml version="X">` | Opening tag and version line. |
| `-> name` | `<topic name="X">` | Topic declarations. |
| (draft) `-> name1 -> name2` | (not available) |  Topics inheriting replies from other topics. |
| (not require) | `<category>` |	AIML's wrapper for a trigger/response (useless for IRIN). |
| `Hello Bot` | `<pattern>HELLO BOT</pattern>` | Input pattern. (Always uppercase in AIML) |
| `Hello human!`| `<template>Hello human!</template>`| 	A response to an input pattern. |
| `XXX` |`<that>XXX</that>`| Match the user's input and also the bot's last message |
| `{N}` | `<star index="N"/>` | Binding of any wildcards in the pattern/trigger. |
| `(please use variable)` | <that index="N,M"> | Insert the bot's previous replies. |
