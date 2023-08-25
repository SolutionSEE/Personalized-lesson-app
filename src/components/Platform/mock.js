import React from 'react';
import pyImg1 from '../../Assets/Images/python1.png';
import pyImg2 from '../../Assets/Images/python2.png';
import pyImg3 from '../../Assets/Images/python3.png';
import pyImg4 from '../../Assets/Images/python4.png';

import arrow from '../../Assets/svg/arrow-right.svg';

export const messages = [
	{
		type: 'bot',
		time: '11sec now',
		text: [
			<p>
				Hello! I am an Ed Tech professional that is here to help with your specific
				needs. You have chosen to search for lessons on :{' '}
				<span className='text-stem-green-600'>
					Middle School / Verbal / Textbook / Informative / Introductive
				</span>
			</p>,
		],
	},
	{
		author: 'Tyler Durden',
		time: '11sec now',
		text: ['I want to learn Python'],
	},
	{
		time: '5 sec ago',
		type: 'bot',
		text: [
			<p>
				That's great! Python is a popular programming language known for its
				simplicity and readability. It has a wide range of applications, including web
				development, data analysis, artificial intelligence, and automation. Here's a
				brief introduction to Python:
			</p>,

			<p>
				1. <span className='font-extrabold'>Installation: </span> To get started, you
				need to install Python on your computer. Visit the official Python website
				(python.org) and download the latest version suitable for your operating
				system.;
			</p>,

			<p>
				2.<span className='font-extrabold'>Running Python code: </span> Python code
				can be written in a text editor and saved with a .py extension. You can run
				Python code by executing the file from the command line or using an Integrated
				Development Environment (IDE) such as PyCharm, Visual Studio Code, or Jupyter
				Notebook.
			</p>,
			<p>
				3. <span className='font-extrabold'>Basic syntax: </span> Python uses
				indentation to define code blocks instead of curly braces or keywords. This
				indentation is important for proper code execution. Here's an example of a
				simple Python program that prints "Hello, World!":pythonCopy code print
				("Hello, World!")
			</p>,

			<img src={pyImg1} alt='reply-img' />,

			<p>
				1. <span className='font-extrabold'>Variables and data types: </span>Python is
				dynamically typed, which means you don't need to explicitly declare variable
				types. Here's an example of declaring variables and using different data
				types:
			</p>,

			<img src={pyImg2} alt='reply-img' />,

			<p>
				2. <span className='font-extrabold'>Control flow: </span>Python provides
				various control flow statements like if-else, for loops, and while loops.
				These statements allow you to control the execution of your code based on
				certain conditions. Here's an example:
			</p>,

			<img src={pyImg3} alt='reply-img' />,

			<p>
				3. <span className='font-extrabold'>Functions: </span>Functions in Python are
				reusable blocks of code that perform a specific task. They help in organizing
				and modularizing your code. Here's an example of defining and calling a
				function:
			</p>,

			<img src={pyImg4} alt='reply-img' />,
		],
	},
];

export const LearningLevelBasic = [
	{
		btn: 'Elementary',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Middle School',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'High School',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'UnderGrad',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Master’s',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Postdoc',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Ph D',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Continued Edu',
		color: '#fff',
		img: arrow,
	},
];
export const Depth = [
	{
		btn: 'Surface Level',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Expanded  Understanding',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'Detailed Analysis',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Practical App',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Adv. Concepts',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Expert Insight',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Specialization',
		color: '#fff',
		img: arrow,
	},
];

export const Learning = [
	{
		btn: 'Visual',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Verbal',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'Active',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Intuitive',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Reflective',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Global',
		color: '#fff',
		img: arrow,
	},
];

export const Communication = [
	{
		btn: 'Formal',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Textbook',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'Layman',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Storytelling',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Socratic',
		color: '#fff',
		img: arrow,
	},
];

export const Tone = [
	{
		btn: 'Debate',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Encouraging',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Neutral',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'Informative',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Friendly',
		color: '#fff',
		img: arrow,
	},
];

export const Reasoning = [
	{
		btn: 'Deductive',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Inductive',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Abductive',
		color: '#000',
		img: arrow,
	},
	{
		btn: 'Analogical',
		color: '#fff',
		img: arrow,
	},
	{
		btn: 'Causal',
		color: '#fff',
		img: arrow,
	},
];

export const RECENT_LESSON = [
	{
		content: 'Python Basics',
		status: 'Not Complete',
		date: '08.08.23',
	},
	{
		content: 'Learning HTML5',
		status: 'Not Complete',
		date: '08.08.23',
	},
	{
		content: 'Learning CSS',
		status: 'Not Complete',
		date: '08.08.23',
	},
];
