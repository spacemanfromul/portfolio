*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
ul,
ol,
li{
    list-style:none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6
{
    font-weight: inherit;
    font-size: inherit;
}
html,
body{
    height: 100%;
    line-height: 1;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: #333;
    color: #fff;
    }

body._lock{
    overflow: hidden;
}
.wrapper{
 min-height: 100%;
}

/*--------------------*/
/*--------------------*/
/*--------------------*/
/*--------------------*/
/* + */
.page{
    padding: 80px 0px 30px 0px; 
}
/* + */
.page_section {               
    padding: 30px;
    max-width: 1200px;
    margin: 0px auto;
}
/* + */
.page_section_1 {
    background-color: #2994ec;
}
/* + */
.page_section_2 {
    background-color: #61968E;
}
/* + */
.page_section_3 {
    background-color: #3F7285;
}
/* + */
.page_section_4 {
    background-color: #d371e0;
}
/* + */
.page_title{
    font-size: 49px;
    margin: 0px 0px 40px 0px;
}
/* + */
.page_text{
    font-size: 16px;
    line-height: 150%;
}
/* + */
.page_text p{
    margin: 0px 0px 20px 0px;
}
/* + */
.page_sub-title{
    font-size: 30px;
    margin: 0px 0px 20px 0px;
}
/* + */
.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(255, 123, 0);
    z-index: 10;
}
/* + */
.header_container{
    max-width: 1200px;
    margin: 0px auto;
    display: flex;
    padding: 0px 30px;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
}
/* + */
.header_logo {
    border-radius: 50%;
    background-color: #fff;
  /*  flex: 0 0 60px;    */
  /*  overflow: hidden; */
    position: relative;
    z-index: 5;
    width: 45px;
    height: 45px;
}  
/* + */
.menu_icon {
    display: none;
}
   /* .menu_list {
        display: flex;
        position: relative;
        z-index: 2;
            } */
/* + */
.menu_list > li {
  /*  list-style: none;*/
    position: relative;
    margin: 0px 0px 0px 20px;
}
/* + */
.menu_link {
    color:rgb(255, 255, 255);
    font-size: 24px;
  /*  text-transform: uppercase;
    text-decoration: none; */
}
/* + */
.menu_link:hover {
    text-decoration: underline;
}
/* + */
.menu_sub-list{
       /* transform: translate(0px, 10%);*/
    position: absolute;
    top: 100%;
    right: 0;
    background-color: black;
    padding: 15px;
    min-width: 200px;
        /*opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all 0.3s ease 0;*/
}
/* + */ 
.menu_sub-list li {
    margin: 0px 0px 10px 0px;
}
/* + */
.menu_sub-list li:last-child{
    margin: 0;
}
/* + */
.menu_sub-link {
    color: #fff;
}
/* + */
.menu_sub-link:hover {
    text-decoration: underline;
}
/* + */
.menu_arrow {
    display:none;
}

/* --------------------------*/
/* + */
body._pc .menu_list > li:hover .menu_sub-list {
    opacity: 1;
    visibility:visible;
    transform: translate(0px, 0px);
    pointer-events: all;
}
/* + */
body._touch .menu_list > li {
    display: flex;
    align-items: center;
}
/* + */
body._touch .menu_link{
    flex: 1 1 auto;
}
/* + */
body._touch .menu_arrow{
    display: block;
    width: 0;
    height: 0;
    margin: 0px 0px 0px 5px;
    transition: transform 0.3s ease 0s;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #fff;
}
/* + */
body._touch .menu_list > li._active .menu_sub-list {
    opacity: 1;
    visibility:visible;
    transform: translate(0px, 0px);
    pointer-events: all;
}
/* + */
body._touch .menu_list > li._active .menu_arrow {
    transform: rotate(-180deg);
}
/*   Hello                  */
.btn {
    background-color: rgb(223, 239, 146);
    border-radius: 2px;
    display: inline-flex;
    padding: 20px 20px;
    font-size: 20px;
    text-align: center;
    height:  47px;
    font-weight: 500;
    line-height: 29 / 20 * 100%;
    justify-content: center;
    color: #000;
    transition: background-color 0.3s ease 0s;
  /*  @media (min-width: 992px){
        &:hover {
            background-color: rgb(223, 239, 146);  ;
        }
    }
 /*   &._fw {
        width: 100%;
    }*/
}
.hello{
    padding: 30px;
    max-width: 1200px;
    margin: 0px auto;
}

.hello_container {
    display: flex;
}

.hello_content {
    align-items: flex-start;
    flex: 1 1 auto;
    padding: 18px 110px 0px 0px;
    flex-direction: row;

}

.hello_title {
    font-size: 44px;
    font-weight: 700;
    color: #fff;
    line-height: 60/44*100%;
}

.hello_avatar {
    display: flex;
    flex: 0 0 243px;
    width: 243px;
    height: 243px;
    border-radius: 50%;
    overflow: hidden;
}

.hello_avatar img {
    display: flex;
    max-width: 100%;
}




/* Desktop */

@media  (min-width: 767px){
    /* + */
    .menu_list{
        display: flex;
        align-items: center;
    }
    /* + */
    .menu_list > li {
        padding: 10px 0;
    }
    /* + */
    .menu_sub-list{
        transform: translate(0px, 10%);
       /* position: absolute;
        top: 100%;
        right: 0;
        background-color: black;
        padding: 15px;
        min-width: 200px;*/
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all 0.3s ease 0;
    }
}

/* Mobile */

   @media  (max-width:767px){
       /* Иконка бургера */
    /* + */
    .menu_icon {
        z-index: 5;
        display:block;
        position: relative;
        width: 30px;
        height: 18px;
        cursor: pointer;
    }
    /* + */
    .menu_icon span,
    .menu_icon::before,
    .menu_icon::after {
        position: absolute;
        background-color: blanchedalmond;
        position: absolute;
        left: 0;
        width: 100%;
        height: 10%;
        transition: all 0.3s ease 0s;
    }
    /* + */
    .menu_icon::before,
    .menu_icon::after {
        content: "";
    }
    /* + */
    .menu_icon::before {
        top: 0;
    }
    /* + */
    .menu_icon::after {
        bottom: 0;
    }
    /* + */ 
    .menu_icon span {
        top: 50%;
        transform: scale(1) translate(0px, -50%);
    }
    /* + */ 
    .menu_icon._active span{
        transform: scale(0) translate(0px, -50%);
    }
    /* + */ 
    .menu_icon._active::before{
        top: 50%;
        transform: rotate(-45deg) translate(0px, -50%);
    }
    /* + */ 
    .menu_icon._active::after{
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
        /* Меню в мобилке */
    /* + */
    .menu_body {
        position:fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: rgba(51, 51, 51, 0.815);
        padding: 100px 30px 30px 30px;
        transition: left 0.3s ease 0s;
        overflow: auto;
    }
    /* + */
    .menu_body._active {
        left: 0;
    }
    /* + */
    .menu_body::before{
        content: "";
        position:fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 70px;
        background-color: blueviolet;
        z-index: 2;
    }
    /* + */
    .menu_list > li {
        flex-wrap: wrap;
        margin: 0px 0px 30px 0px;
    }
    /* + */
    .menu_list > li:last-child {
        margin-bottom: 0;
    }
    /* + */
    .menu_list > li._active .menu_sub-list {
        display: block;
    }
    /* + */
    .menu_link {
        font-size: 24px;
    }
    /* + */
    .menu_sub-list {
        position: relative;
        background-color: #fff;
        flex: 1 1 100%;
        margin: 20px 0px 0px 0px;
        display: none;
    }
    /* + */
    .menu_sub-link {
        font-size:20px;
        color: #000;
    }
    /* + */
    .hello_container {
        text-align: center;
        flex-direction: column-reverse;
        align-items: center;
    }  
    .hello_content{
        align-items: center;
        padding: 0px 0px 0px 0px;
    } 
}  
