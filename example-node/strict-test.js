"use strict";

/**
 * @fileoverview Вправа на роботу з функціями та вкладеними викликами у JavaScript
 * @author Your Name
 */

/**
 * Функція для обчислення середнього арифметичного двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Середнє арифметичне
 */
const average = (a, b) => (a + b) / 2;

/**
 * Функція для обчислення квадрату числа
 * @param {number} x - Число для піднесення до квадрату
 * @returns {number} Квадрат числа
 */
const square = (x) => x * x;

/**
 * Функція для обчислення кубу числа
 * @param {number} x - Число для піднесення до кубу
 * @returns {number} Куб числа
 */
const cube = (x) => x * x * x;

/**
 * Функція, що обчислює середні значення між квадратами та кубами чисел від 0 до 9
 * @returns {number[]} Масив середніх значень
 */
const calculate = () => {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const squareResult = square(i);
    const cubeResult = cube(i);
    results.push(average(squareResult, cubeResult));
  }
  return results;
};

// Експортуємо для тестів
module.exports = {
  average,
  square,
  cube,
  calculate,
};
