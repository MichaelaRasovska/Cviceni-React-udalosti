import React from 'react'

// Zadání: Dopiš komponentu tak, aby každé tlačítko po kliknutí vypsalo, jako volbu uživatel vybral. Například pro poslední `console.log('Uživatel zvolil zimu')`.

export const Uloha3 = () => {
	return (
		<>
			Které roční období je ve střední Evropě nejteplejší?
			<ol>
				<li>
					<button onClick={() => console.log('Uživatel zvolil jaro')}>
						jaro
					</button>
				</li>
				<li>
					<button onClick={() => console.log('Uživatel zvolil léto')}>
						léto
					</button>
				</li>
				<li>
					<button onClick={() => console.log('Uživatel zvolil podzim')}>
						podzim
					</button>
				</li>
				<li>
					<button onClick={() => console.log('Uživatel zvolil zimu')}>
						zima
					</button>
				</li>
			</ol>
		</>
	)
}
