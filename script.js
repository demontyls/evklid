
document.querySelector('.burger-btn').addEventListener('click', function(){
    document.querySelector('.burger-btn').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
  })

  const tabsBtn = document.querySelectorAll(".li-namb");
  const tabsItem = document.querySelectorAll(".work-box");

      tabsBtn.forEach(function(item) {
        item.addEventListener("click",function(){
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);


                tabsBtn.forEach(function(item){
                  item.classList.remove('active');

                });
                tabsItem.forEach(function(item){
                  item.classList.remove('active');

                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
        });
      });



    //   const accBtn = document.querySelectorAll(".accrdeon-box");
    //   const accTextr = document.querySelectorAll(".acc-text");
    //   const accButtonRem = document.querySelectorAll(".acc-btn")


    //         accBtn.forEach(function(item) {
    //           item.addEventListener("click",function(){
    //               let accrdBtn = item;
    //               let accId = accrdBtn.getAttribute("data-acc");
    //               let accText = document.querySelector(accId);
    //               let zerId = accrdBtn.getAttribute("data-zer");
    //               let accButton = document.querySelector(zerId);
    //               // let accTex = document.querySelector(".acc-text");
              
                  
                  
    //               accBtn.forEach(function(item){
    //                 item.classList.remove('active');
  
    //               });

    //               accTextr.forEach(function(item){
    //                 item.classList.remove('active');
  
    //               });
    //               accButtonRem.forEach(function(item){
    //                 item.classList.remove('active');
  
    //               });

                
    //               accrdBtn.classList.add('active');
    //               accText.classList.add('active');
    //               accButton.classList.add('active');

    //           });
    //         });
