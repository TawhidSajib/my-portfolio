function myFunction() {
    var x = document.querySelector('.nav-list')
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

fetch('user.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        let serviceColumn = document.querySelectorAll('.serviceColumn');
        data.data.forEach((user, index) => {
            serviceColumn[index].innerHTML +=
                `
            <h1 class="service-header">${user.header}</h1>
            <p class="service-para">${user.paragraph}</p>

            `
        })

        let workColumn = document.querySelectorAll('.workColumn')
        data.images.forEach((user, index) => {
            workColumn[index].innerHTML += `<img class="workImg" src="${user.image}" height="100%" width="100%">`
        })

        let name = document.querySelector('.name')
        let phone = document.querySelector('.phone')
        let email = document.querySelector('.email')
        data.info.forEach(user => {
            name.innerHTML += `I am <strong>${user.name}</strong>`
            phone.innerHTML += `<span>Phone:</span> ${user.phone} `
            email.innerHTML += `<span>Email:</span> ${user.email} `
        })

        let skillName = document.querySelectorAll('.skillName')
        let skill = document.querySelectorAll('.skill')
        data.skills.forEach((user, index) => {
            skillName[index].innerHTML += `${user.name}`
            skill[index].innerHTML += `${user.progress}`
        })
    })