document.addEventListener('DOMContentLoaded', function () {
    initProject();
});

function initProject() {

    var menuItems = [
            {
                text: "Кто мы",
                anchor: "#who"
            },
            {
                text: "Выбор тура",
                anchor: "#tours"
            },
            {
                text: "Отзывы",
                anchor: "#recalls"
            },
            {
                text: "Фотогалерея",
                anchor: "#photo"
            },
            // {
            //     text: "Работа с нами",
            //     anchor: "#work_with_us"
            // },
            {
                text: "Контакты",
                anchor: "#contacts"
            },
        ],

        contacts = [
            {
                icon: "fa fa-phone",
                info: "+7 914 474 15 29"
            },
            {
                icon: "fa fa-envelope",
                info: "admin@gastro-chita.ru",
            },
            {
                icon: "fa fa-instagram",
                info: "gastro_chita"
            },
        ],

        menu = new Vue({
            el: '#menu',
            data: {
                items: menuItems
            }

        }),

        topMenu = new Vue({
            el: '#topMenu',
            data: {
                items: menuItems
            }

        }),

        contactsNav = new Vue({
            el: '.nav-contacts',
            data: {
                myclass: "fa fa-instagram",
                items: contacts
            }
        }),

        footerContacts = new Vue({
           el: '.footer-contacts',
           data: {
               myclass: "fa fa-instagram",
               items: contacts
           }
        }),

        why = new Vue({
            el: '#whyus',
            data: {
                items: [
                    "Уникальный в Забайкальском крае проект по гастрономическому туризму: еда, напитки и история",
                    "Дегустации включены в тур",
                    "Тематические экскурсии для разных компаний",
                    "Мероприятия в формате экскурсий с дегустациями – набирающий популярность вид отдыха",
                    "Факты из истории рассказывает профессиональный гид",
                    "Любой маршрут можно составить по запросу с учётом пожеланий клиента.",
                    "Мы помогаем расширять кругозор, горизонты и круг общения",
                    "Наши партнёры – топовые забайкальские рестораторы и производители вкусной еды",
                    "После экскурсии с «Гастро-Читой» Вы посмотрите на столицу края с другой стороны и расскажете об этом своим близким, местным и приезжим",
                    "Попробуй Забайкалье на вкус"
                ]
            }
        }),

        recalls = [
            {
                photo: '001.jpg',
                text: 'Хотите "Историю со вкусом"? Слово "вкусом" здесь ключевое. "Истории со вкусом" - это гастро-прогулка и уже само по себе название вкусное. Поход по ресторанам и кафе с дегустацией блюд, приправленный специями рассказов о истории создания этих заведений и памятников города. Самая настоящая история нашего города, его самых настоящих мировых героев, стоящих у истоков создания Читы.'
            },
            {
                photo: '002.jpg',
                text: 'Ребята, это просто супер классное развлечение. Отдых в формате вкусно едим и случаем исторические факты о Чите.'
            },
            {
                photo: '003.jpg',
                text: 'Сегодня прогулялись по Чите вместе с Гастро Чита. День прошел очень интересно и познавательно. Узнали о вине, выпили глинтвейн, пообедали. Фишкой всей прогулки было письмо Деду Морозу. И, в завершение, посидели в уютном месте Mr. Fox Чита. И, конечно, всю прогулку нас сопровождал гид, который рассказывал много интересных фактов о Чите, об архитектуре города, периодически разбавляя факты историческими анекдотами.'
            },
            {
                photo: '004.jpg',
                text: 'От души рекомендую Гастро Чита. Теперь это не только про вкусную еду и приятную компанию, но и про интереснейшую историю нашего города с отличным чувством юмора.'
            },
            {
                photo: '005.jpg',
                text: 'Главное во всей этой предновогодней суете остановиться, поймать момент и насладиться настоящим зимним счастьем. Желаю вас с бокалом сливочного пива горячего в руках успеть поймать свой момент. Спасибо Гастро Чита за такую возможность.'
            },
            {
                photo: '005.jpg',
                text: 'Главное во всей этой предновогодней суете остановиться, поймать момент и насладиться настоящим зимним счастьем. Желаю вас с бокалом сливочного пива горячего в руках успеть поймать свой момент. Спасибо Гастро Чита за такую возможность.'
            },

        ],

        recallsBlock = new Vue({
            el: ".recalls-slider",
            data:{
                items: recalls
            }
        });

    $('.recalls-slider').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: true,
        rewindNav: true,
        dots: false,
        autoplay: true
    });

    $(".tours-slider").owlCarousel({
        items: 1,
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        nav: true, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
    });

    var photoGallery = new Gallery({
        element: '#photo-galery'
    });

    var topMenu = $('#topMenu');

    document.addEventListener('scroll', function () {
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if(posTop > 200){
            if(!topMenu.hasClass('active')){
                topMenu.addClass('active')
            }
        } else{
            if(topMenu.hasClass('active')){
                topMenu.removeClass('active');
            }
        }
    });
}