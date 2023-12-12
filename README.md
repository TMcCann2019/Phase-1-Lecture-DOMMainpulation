# Phase 1 Lecture 2: DOM Manipulation

## Objectives

By the end of today's lecture, you will be able to grab elements from the DOM and change their appearance. You will also know how to create and remove elements.

## Lesson Plan

1. Take a look at the HTML page to familiarize yourself with it.
    - What do the elements resemble? Why is this referred to as a **tree**? resembles an upside down tree. branches, leafs, etc
    - What is the **Document Object Model**? refers to the HTML tree
    - What is the `defer` line doing in the `<script>` tag? load the remainder of the html file prior to loading the file
2. Grab the `<h1>` tag from the DOM and change its color. see in index.js file
    - What are the different ways to grab the tag? can grab via id, querySelector(), 
3. Grab the `<p>` tag from the DOM and replace its filler text with real text. see in index.js file
    - What is the difference between `innerHTML` and `textContent`?
4. Create a list of 5 numbers and add them to the `<ol>` tag. see in index.js file
    - How do you know which tag to use?
    - What is the difference between `append` and `appendChild`? append can add multiple at a time, appendChild can only be one at a time
    - Can you make this list more efficiently?
5. Remove the final `<p>` tag from the page. see in index.js file

## Looking Ahead

Tomorrow's lecture will continue our work with the DOM, adding in ways to dynamically change the DOM using event listeners.