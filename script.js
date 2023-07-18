let file = document.querySelector(".img")
let btn = document.querySelector("button")
let img = document.querySelector("img")
let editBtn = document.querySelector("#edit-text")
let postPage = document.querySelector(".post-stat")
let userPage = document.querySelector(".main-page")
let board = document.querySelector(".board")
let postBoard = document.querySelector(".post-stat")
let recBtn = document.querySelector(".send")
let recIcon = document.querySelector("#mic")
let timesBtn = document.querySelector("#back")
let paint = document.querySelector(".fa-paint-brush")
let fileBoxPage = document.querySelector(".file-upload-box")
let fileTimes = document.querySelector('#file-times')
let displayFileImg = document.querySelector(".pic-hold")
let descriptInput = document.querySelector("#text")
let descriptBtn = document.querySelector(".desc-send")
let descriptIcon = document.querySelector("#desc-mic")
let imgStat = document.querySelector(".img-stat")
let item = document.querySelectorAll(".item img")
let itemNames = document.querySelectorAll(".item .user-name")
let descriptText = document.querySelector(".descript")
let friendsImgs = document.querySelectorAll(".friends-stat img:first-child")
let friendsUsername =  document.querySelectorAll(".friends-stat .user-name")
let count = 0
let timer = 5
let perc = 0
let interval;
let timeout;
let loaderInterval
let newUserStat = document.createElement("div")
let allStat = document.querySelectorAll(".user-status1")
let line = document.createElement("div")
let loader = document.createElement("div")
let proPics = ['WhatsApp_Image_2022-11-22_at_18.48.48__1_-removebg-preview.png',
'psychographic-segmentation-definition-edited.jpg', 'images (15).jpg','images (14).jpg', 'images (13).jpg', 'images (12).jpg',
'images (11).jpg','images (10).jpg', 'images (9).jpg', 'images (8).jpg',
'images (3).png','download (4).jpg', 'download (3).png', 'download (3).jpg']
let names = ['alex dominic', 'baby', 'hush puppy', 'my gee', 'stephen',
'albert', 'scammer', 'bullion', 'the goat', 'crush', 'chloe', 'busybody', 'Ex', 'Joshua']
friendsImgs.forEach((el,i)=>{
    el.src = proPics[i]
})
itemNames.forEach((el, i) => {
    el.innerHTML = names[i]
});
    item.forEach((imgs, i) =>{
        imgs.src = proPics[i]
    })
friendsUsername.forEach((el,i) =>{
    el.innerHTML = names[i]
})
function a() {
     
 loaderInterval = setInterval(() => {
        if(perc < 100){
            loader.style.width = `${perc++}%`
            
        }
        else{
            allStat[count++].style.display = 'block'
            clearInterval(interval)
           perc = 0
        }
    },50);


    // let allStat = document.querySelectorAll(".user-status1")
    
      timeout = setTimeout(() => {
        allStat[count++].style.display = 'block'
      }, 4000);
    
      interval = setInterval(() => {
    
        if (timer > 0) {
            timer--
        }
        else{
          clearInterval(interval)
          imgStat.style.display = 'none'
          userPage.style.display = 'block'
        }
      }, 1000);

      window.addEventListener("click", (e)=>{
        if (e.pageX > 100) {
         allStat.forEach(el =>{
            el.addEventListener("click", ()=>{
                allStat[1].style.display = 'block'
            })
         })
        }
    })
}

descriptBtn.addEventListener("click", a)
function updateImage(e) {

    let file = e.target.files[0]

    if (file) {
        let reader = new FileReader()
       
        
        reader.onload = function(e){
        newUserStat = document.createElement("div")
        let newHeader = document.createElement("header")
        let loaderBox = document.createElement("div")
         line = document.createElement("div")
        loader = document.createElement("div")
        let newInfo = document.createElement("div")
        let arrLeft = document.createElement("i")
        let newProfileBox = document.createElement("div")
        let newImg = document.createElement("img")
        let newNameBox = document.createElement("div")
        let newUsername = document.createElement("div")
        let newTimepost = document.createElement("div")
        let ellipsis = document.createElement("i")
        let newMain = document.createElement("main")
        let mainImg = document.createElement("img")
        let newFooter = document.createElement("footer")
        let descriptBox = document.createElement("div")
        let saveBox = document.createElement("div")
        let newCheck = document.createElement("i")
        let newReply = document.createElement("div")
        let newAngleUp = document.createElement("i")
        let newReplyText = document.createElement("p")
        let newArrowDown = document.createElement("div")
        
        imgStat.append(newUserStat)
        newUserStat.append(newHeader)
        newHeader.append(loaderBox)
        loaderBox.append(line)
        line.append(loader)
        newHeader.append(newInfo)
        newInfo.append(arrLeft)
        newInfo.append(newProfileBox)
        newProfileBox.append(newImg)
        newProfileBox.append(newNameBox)
        newNameBox.append(newUsername)
        newNameBox.append(newTimepost)
        newInfo.append(ellipsis)
        newUserStat.append(newMain)
        newMain.append(mainImg)
        newUserStat.append(newFooter)
        newFooter.append(descriptBox)
        newFooter.append(saveBox)
        saveBox.append(newCheck)
        saveBox.append(newReply)
        newReply.append(newAngleUp)
        newReply.append(newReplyText)
        saveBox.append(newArrowDown)
    
        newUserStat.classList.add("user-status1")
        newHeader.classList.add('img-header')
        loaderBox.classList.add("loader-box")
        line.classList.add("line")
        loader.classList.add("load")
        newInfo.classList.add('info')
        newMain.classList.add("image")
        newImg.classList.add("iimg")
        mainImg.classList.add("img-img")
        newProfileBox.classList.add('profile')
        ellipsis.setAttribute("class", "fa fa-ellipsis-v")
        newFooter.classList.add("footer")
        descriptBox.classList.add("descript")
        saveBox.classList.add("save-box")
        newCheck.setAttribute("class", "fa fa-check")
        newCheck.setAttribute("id", "goBack")
        newReply.classList.add("reply")
        newReplyText.classList.add("p")
        newAngleUp.setAttribute("class", "fa fa-angle-up")
        newArrowDown.setAttribute("class", "fa fa-arrow-down")

        let fileImg = e.target.result
        fileBoxPage.style.display = 'block'
        userPage.style.display = 'none'
      displayFileImg.src = fileImg
      mainImg.src = fileImg

      let goBack = document.querySelectorAll("#goBack")
     
      function goBackFunc() {
        imgStat.style.display = 'none'
        userPage.style.display = 'block'
        clearInterval(interval)
        clearTimeout(timeout)
        clearInterval(loaderInterval)
        perc = 0
        timer = 5
        count = 0
      }
      goBack.forEach(el =>{
        el.addEventListener("click", goBackFunc)
      })
        descriptInput.addEventListener("keyup", (e)=>{
 
            if (descriptInput.value === '') {
                descriptIcon.classList.remove("fa-paper-plane")
                descriptIcon.classList.add("fa-microphone")
              
            }
            else{
                descriptIcon.classList.add("fa-paper-plane")
                descriptIcon.classList.remove("fa-microphone")
                let allDescript = document.querySelectorAll(".descript")
                allDescript.forEach(el =>{
                    el.innerHTML = descriptInput.value
                })
            }
            if (descriptIcon.classList.contains('fa-paper-plane')) {

               
        descriptBtn.addEventListener("click", ()=>{
            imgStat.style.display = 'block'
            userPage.style.display = 'none'
            fileBoxPage.style.display = 'none'
            newUsername.innerHTML = 'Joe Doe'
            newTimepost.innerHTML = 'Today, 11 PM'
            newReplyText.innerHTML ='Reply'
  
      

              
            
            
           
 
            })

            }
        
        })
        
        }

        reader.readAsDataURL(file)
        
   
    }
}

function cancelFilePage() {
    userPage.style.display = 'block'
    fileBoxPage.style.display = 'none'
}

function displayWritePage() {
    postPage.style.display = 'block'
    userPage.style.display = 'none'
}
function writtenPost() {

    board.addEventListener("input", ()=>{
        if (board.innerHTML !== '') {
        
            board.classList.add("active")
            mic.classList.add("fa-paper-plane")
            mic.classList.remove("fa-microphone")
        }
        else{
            board.classList.remove("active")
            mic.classList.remove("fa-paper-plane")
            mic.classList.add("fa-microphone")
        } 
    })


}

function cancelWritting() {
    userPage.style.display = 'block'
    postPage.style.display = 'none'
}

function changeBg() {
    let colorPellet = '0123456789abcdef'
    let color = ''
    let colorLength = 6

    for (let i = 0; i < colorLength; i++) {
        let random = Math.floor(Math.random() * colorPellet.length)
    let randColor = colorPellet.substring(random, random + 1)
     color += randColor
    }
    postBoard.style.background = `#${color}`

}

writtenPost()
editBtn.addEventListener("click", displayWritePage)
paint.addEventListener("click", changeBg)
fileTimes.addEventListener("click", cancelFilePage)
timesBtn.addEventListener("click", cancelWritting)
file.addEventListener("input", updateImage)
