class FoodItem extends HTMLElement {

    constructor() {
        super();
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>

            .card{
                margin: auto;
                box-sizing: border-box:
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(238, 169, 84, 1);
                border-radius: 12px;
                border-color: #f2cc8f;
                overflow: hidden;
                background-color: white;
            }

            h2{
                color: #DA6444;
                font-weight: bolder;
            }

            .food-image {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
                transition: transform 0.2s ease;
            }

            .food-image:hover{
                transform: scale(1.2);
            }

            .food-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        </style>
        
        <div class="card">
            <img class="food-image card-img-top" src="${this._food.strMealThumb}" alt="food Image">
            <div class="food-info card-body">
                <h2>${this._food.strMeal}</h2>
                <p class="card-text" style="font-style: italic;">Origin: ${this._food.strArea}</p>
                <p class="card-text">${this._food.strInstructions}</p>
            </div>
        </div>`;
    }
}

customElements.define("food-item", FoodItem);

