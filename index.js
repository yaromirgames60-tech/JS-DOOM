import {cats} from "./cats.js"

const container = document.getElementById('catsContainer');

        for (let i = 0; i < cats.length; i++) {
            const cat = cats[i];
            

            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.gap = '20px';
            container.style.justifyContent = 'center';
            container.style.padding = '20px';
            container.style.backgroundColor = '#f0f8ff';
            container.style.minHeight = '100vh';
            const catElement = document.createElement('div');

            catElement.style.border = '2px solid #ccc';
            catElement.style.margin = '10px';
            catElement.style.padding = '15px';
            catElement.style.borderRadius = '8px';
            catElement.style.backgroundColor = '#f9f9f9';
            catElement.style.maxWidth = '500px';
            
    
            if (cat.favourite) {
                catElement.style.backgroundColor = '#fff9c4';
            }
            

            catElement.innerHTML = `
                <h2 style="color: #333; margin-top: 0;">${cat.name}</h2>
                <img src="${cat.img_link}" alt="${cat.name}" 
                     style="max-width: 100%; height: auto; border-radius: 5px;">
                <p style="font-size: 16px; margin: 10px 0;">
                    <strong>Возраст</strong> ${cat.age} лет
                </p>
                <p style="font-size: 16px; margin: 10px 0;">
                    <strong>Рейтинг</strong> ${cat.rate}/10
                </p>
                <p style="font-size: 14px; color: #555;">
                    ${cat.description}
                </p>
                ${cat.favourite ? '<p style="color: #ff9800; font-weight: bold;">самый миляшка</p>' : ''}
            `;

            container.appendChild(catElement);
        }