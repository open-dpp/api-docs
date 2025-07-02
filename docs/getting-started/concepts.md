---
aside: false
outline: true
title: Concepts
---
```mermaid
flowchart LR
    PM@{ shape: rect, label: "product data model" }
    MO@{ shape: rect, label: "model passport" }
    IT@{ shape: rect, label: "item passport" }
    classDef default fill:#A2C7AB,stroke:#A2C7AB
    
    PM == "assigned to" ==> MO
    MO == "has multiple" ==> IT
```
At the beginning we have different **product data models** for batteries, laptops, textiles and so on.
They describe the required structure and data fields.
Let's take the following simplified **product data model** of a battery:

* Technical Specs (Section)
    * CPU (Numeric Field)
    * Memory (Numeric Field)
* Sustainability (Section)
    * Carbon Footprint (Numeric Field)
    * Carbon Footprint calculation method (Text Field)

A **product data model** is built up of sections where each **section** consists of a list of **data fields**.
