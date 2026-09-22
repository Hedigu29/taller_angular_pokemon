import {Routes} from '@angular/router'
import {RegistroUsuario} from './components/registro-usuario/registro-usuario';
import {BuscadorPokemon} from './components/buscador-pokemon/buscador-pokemon';
import {Bullbasaur} from './components/pokemon/bullbasaur/bullbasaur';
import {Charizard} from './components/pokemon/charizard/charizard';
import {Eevee} from './components/pokemon/eevee/eevee';
import {Mewtwo} from './components/pokemon/mewtwo/mewtwo';
import {Pikachu} from './components/pokemon/pikachu/pikachu';
import {Squirtle} from './components/pokemon/squirtle/squirtle';
import {PokemonDetalles} from './components/pokemon-detalles/pokemon-detalles';
import {PokemonLista} from './components/pokemon-lista/pokemon-lista';



export const routes: Routes = [

    {path: '',redirectTo: 'registro', pathMatch: 'full'},
    {path:'registro', component:RegistroUsuario},
    {path:'buscador', component:BuscadorPokemon},
    {path:'**', redirectTo: 'registro'},
    {path:'bullbasaur_manual', component:Bullbasaur},
    {path:'charizard_manual', component:Charizard},
    {path:'eevee_manual', component:Eevee},
    {path:'mewtwo_manual', component:Mewtwo},
    {path:'pikachu_manual', component:Pikachu},
    {path:'squirtle_manual', component:Squirtle},
    {path:'pokemon-lista', component:PokemonLista},
    {path:'pokemon/:name', component:PokemonDetalles},


]