async function getData() {
        const res = await fetch("json/articles.json");
        const data = await res.json();
        return data;
    };

async function main() {
        const itemList = await getData();
        const itemEl = document.querySelector(".article__grid");
        for (const item of itemList) {
            itemEl.innerHTML+= 
            `<div class="article__card">
                <img src="assets/${item.image}" alt="article" />
                <div>
                    <p>${item.date}</p>
                    <a href="#">${item.category}</a>
                </div>
                <h4>${item.title}</h4>
            </div>`;
        }
    };

main()