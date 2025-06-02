async function getData() {
        const res = await fetch("json/faq.json");
        const data = await res.json();
        return data;
    };

async function main() {
        const faqList = await getData();
        const faqEl = document.querySelector(".faq__grid");
        for (const item of faqList) {
            faqEl.innerHTML+= 
            `<div class="faq__card">
                    <div class="faq__header">
                        <h4>${item.question}</h4>
                        <span><i class="ri-arrow-down-s-line"></i></span>
                    </div>
                    <div class="faq__description">
                    ${item.answer}
                    </div>
                </div>`;
        }
    };

main()