import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  transform(valores: any[], filtros: any[]) {
    if (!valores || !filtros) {
      return valores;
    }

    let resultado: any[] = [];

    filtros.forEach(filtro => {
      if (filtro.campo != null && filtro.valor != null) {
        let teste = valores.filter(valor => valor[filtro.campo].toUpperCase() == filtro.valor.toUpperCase() || valor[filtro.campo].toUpperCase().indexOf(filtro.valor.toUpperCase()) >= 0);
        teste.forEach(item =>{
          if(resultado.find(p => p._id == item._id) == null) 
            resultado.push(item);
        })
      }
    });
    
    return (resultado.length == 0) ? valores : resultado;
  }
}