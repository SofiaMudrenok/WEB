class Movie {
    constructor(id, name, director, actors, produser, url, date, cash) {
      this.name = name;
      this.id = id++;
      this.director = director;
      this.actors = actors;
      this.produser = produser;
      this.url = url;
      this.date =date;
      this.cash = cash;
    }
}
class StringifyMovie extends Movie {
    ToString() {
      return `
              Name: ${this.name}
              Director: ${this.director}
              Produser: ${this.produser}
              Actors: ${this.actors}
              URL: ${this.url}
              Date: ${this.date}
              Cash: ${this.cash}
              `;
    }
}
class Movies {
    constructor() {
        this.movies = [];
      }
    
      addOne(elem) {
        this.movies.push(elem);
      }
    
      addMany(elems) {
        elems.forEach((elem) => {
          this.movies.push(elem);
        });
      }
      delete(someId) {
        let index = this.movies.findIndex((elem) => elem.id == someId);
        if (index == -1) throw "Not found";
        this.movies.splice(index, 1);
      }
    
      edit(someId, newObj) {
        let oldObj = this.movies.findIndex((elem) => elem.id == someId);
        this.movies[oldObj] = newObj;
        this.movies[oldObj].id = someId;
        id--;
      }
    
      getById(someId) {
        return this.movies.find((elem) => elem.id == someId);
      }
    
      getInfo(someId) {
        return this.getById(someId).ToString();
      }
    
      getAll() {
        return [...this.movies];
      }
    }
class MoviesWithDOM extends Movies {
    moviesToHTML(movie) {
      return `
        <tr>
        <td>
            ${movie.id}
        </td>
        <td>
            ${movie.name}
        </td>
        <td>
            ${movie.director}
        </td>
        <td>
            ${movie.produser}
        </td>
        <td>
            ${movie.actors}
        </td>
        <td>
            ${movie.url}
        </td>
        <td>
            ${movie.date}
        </td>
        <td>
            ${movie.cash}
        </td>     
        <td> 
        </td>
        </tr>
      `;
    }
  
    moviesTableToHTML() {
      let rows = "";
      for (let movie of this.getAll()) {
        rows += this.moviesToHTML(movie);
      }
      return `
          <table>
              <tr>
                  <th>
                      Id
                  </th>
                  <th>
                      Name
                  </th>
                  <th>
                      Dir
                  </th>
                  <th>
                      Prod
                  </th>
                  <th>
                      Act
                  </th>
                  <th>
                      URL
                  </th>  
                  <th>
                      Year
                  </th>
                  <th>
                      Cash
                  </th>                
              </tr>
              ${rows}
          </table>
      `;
    }
    addFormToHTML() {
        return ` 
            <div id="add">
                <form name="addForm" method="post" action="#">
                    <h3> Add Movie </h3>
                    <input name="name" placeholder="name"> 
                    <input name="director" placeholder="director">
                    <input name="produser" placeholder="produser">
                    <input name="actors" placeholder="actor">
                    <input name="url" placeholder="url">
                    <input name="date" placeholder="cash">
                    <input name="cash" placeholder="cash">                                        
                    <button type="button" onclick="AddNewMovie()">
                        Save
                    </button>
                </form>
            </div>
        `;
      }
  
    toHTML() {
      return (
        all.moviesTableToHTML()+ this.addFormToHTML()
      );
    }
    addEventListners() {
    document.addEventListener("addMovie", (event) => {
          super.addOne(
            new StringifyMovie(
              event.detail.name,
              event.detail.director,
              event.detail.produser,
              event.detail.actors,
              event.detail.url,
              event.detail.date,
              event.detail.cash
            )
          );
          document.getElementById("reactive").innerHTML = this.toHTML();
        });
      }  

    }
  function AddNewMovie() {
    const name = document.getElementsByName("name").value;
    const director = document.getElementsByName("director").value;
    const produser = document.getElementsByName("produser").value;
    const actors = document.getElementsByName("actors").value;
    const url =document.getElementsByName("url").value;
    const date =document.getElementsByName("date").value;
    const cash = document.getElementsByName("cash").value;
    let addMovieEvent = new CustomEvent("addMovie", {
      detail: {
        name,
        director,
        produser,
        actors,
        url,
        date,
        cash
      },
    });
    document.dispatchEvent(addMovieEvent);
  }
  let all = new MoviesWithDOM();
  let Movie1 = new StringifyMovie("aaa", "bbb", "ccc", "ddd", "url", 2020, 20);
  all.addOne(Movie1);
  document.getElementById("reactive").innerHTML = all.toHTML();
  all.addEventListners();