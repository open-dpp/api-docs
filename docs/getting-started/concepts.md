---
aside: false
outline: true
title: Concepts
---
```mermaid
flowchart LR
    PM@{ shape: rect, label: "template" }
    MO@{ shape: rect, label: "model passport" }
    IT@{ shape: rect, label: "item passport" }
    classDef default fill:#A2C7AB,stroke:#A2C7AB
    
    PM == "assigned to" ==> MO
    MO == "has multiple" ==> IT
```
At the beginning we have different **templates** for batteries, laptops, textiles and so on.
They describe the required structure and data fields.
Let's take the following simplified **template** of a laptop:

* Technical Specs (Section)
    * CPU (Numeric Field, model level)
    * Memory (Numeric Field, model level)
* Sustainability (Section)
    * Carbon Footprint (Numeric Field, item level)
    * Carbon Footprint calculation method (Text Field, model level)

A **template** is built up of sections where each **section** consists of a list of **data fields**.

The template describes the structure and data fields of a passport. However, the data values of all the
data fields are stored either in a **model** or **item** passport. But what is the difference between a model and an item?
Actually, these are different levels of granularity. Let us take the laptop example again.
The model can be something like an *Apple MacBook Pro 2019 | 16*. Now let's say Bob has such a laptop and Alice too.
These laptops are individual items of the model *Apple MacBook Pro 2019 | 16*. They have different serial numbers.
For simplicity, let's call the laptop of Bob *item 1* and the laptop of Alice *item 2*. Both items have some values like
the memory or CPU in common. All the values which are the same over all items are stored in the corresponding model passport
*Apple MacBook Pro 2019 | 16*. However, *item 1* and *item 2* can have different carbon footprints since they are manufactured 
in different factories, such that the transportation causes other carbon footprint values. Therefore, the carbon footprint values
are stored in the individual item passports.

Let us bring everything together. The **template** describes the structure and data fields. It also defines the
granularity level of each data field. Having the **template** we can create a **model passport** from it.
A **model passport** defines the values of the data fields which are the same over all items. At the end, having a model passport
we can create **item passports** from it. A **item passport** references all the data values on the model level. Additionally,
it defines the values of the data fields which can be different to other items.

