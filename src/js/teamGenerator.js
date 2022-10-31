const generate = document.getElementById('generate');
const result = document.querySelector('.result');
const member = document.getElementById('member');
const team = document.getElementById('team');

generate.addEventListener('click', () => {
    if (member.value == '' || team.value == '') {
        alert('Please fill all the field');
    } else {
        const teamName = team.value.split(',');
        const teamMember = member.value;

        if (teamName.length < teamMember) {
            alert('Team member is more than team name');
        } else {
            const team = [];

            for (let i = 0; i < teamMember; i++) {
                team.push([]);
            }

            let i = 0;
            while (teamName.length > 0) {
                const rand = Math.floor(Math.random() * teamName.length);
                team[i++].push(teamName[rand]);
                teamName.splice(rand, 1);
                if (i == teamMember) {
                    i = 0;
                }
            }

            result.innerHTML = '';
            team.forEach((item, index) => {
                result.innerHTML += `<h2>Team ${index + 1}</h2>`;
                item.forEach((name) => {
                    result.innerHTML += `<p>${name}</p>`;
                });
            })
        }
    }
});