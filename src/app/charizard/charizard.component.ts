import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.css']
})
export class CharizardComponent implements OnInit {
  charizard!: Pokemon;
  constructor(private dataService: PokemonsService) { }

  ngOnInit(): void {
    this.dataService.getPokemon(6).subscribe(data => {
      this.charizard = data;
    })

  }

}
