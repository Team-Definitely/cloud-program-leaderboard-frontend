console.clear();

function getData() {
    var xh = new XMLHttpRequest();
    xh.open(
        "GET",
        "https://this-app-is-a-disaster.herokuapp.com/",
        true
    );
    xh.setRequestHeader("Content-Type", "application/json");
    xh.send();
    xh.onload = function () {
        if (this.status == 200) {
            // // console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            console.log(data);
            const randomEmoji = () => {
                const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
                let randomNumber = Math.floor(Math.random() * emojis.length);
                return emojis[randomNumber];
            };
            var i = 1;
            data.forEach(member => {
                let newRow = document.createElement('li');
                newRow.classList = 'c-list__item';
                newRow.innerHTML = `
                    <div class="c-list__grid">
                        <div class="c-flag c-place u-bg--transparent">${i}</div>
                        <div class="c-media">
                            <img class="c-avatar c-media__img" src="${member.dp}" />
                            <div class="c-media__content">
                                <div class="c-media__title">${member.name}</div>
                                <a class="c-media__link u-text--small">${member.quests}</a>
                            </div>
                        </div>
                        <div class="u-text--right c-kudos">
                            <div class="u-mt--8">
                                <strong>${member.quests_status}</strong> ${randomEmoji()}
                            </div>
                        </div>
                    </div>
                `;
                if (i === 1) {
                    newRow.querySelector('.c-place').classList.add('u-text--dark');
                    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
                    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
                } else if (i === 2) {
                    newRow.querySelector('.c-place').classList.add('u-text--dark');
                    newRow.querySelector('.c-place').classList.add('u-bg--teal');
                    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
                } else if (i === 3) {
                    newRow.querySelector('.c-place').classList.add('u-text--dark');
                    newRow.querySelector('.c-place').classList.add('u-bg--orange');
                    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
                }
                i++;
                list.appendChild(newRow);
            });

        
            
            
        } else {
            console.log("Something went wrong.")
        }
    };
}
