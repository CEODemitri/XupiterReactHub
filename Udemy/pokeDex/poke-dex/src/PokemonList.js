import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
        {pokemon.map(p => (
            // always place a key when looping in react 
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}
