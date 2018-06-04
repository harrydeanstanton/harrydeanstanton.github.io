function init() {

    console.log("hello world");


    const text_1 = document.querySelector(".project_name_1");
    const text_2 = document.querySelector(".project_name_2");
    const text_3 = document.querySelector(".project_name_3");

    const metroSpan = document.createElement('span');
    const sitSpan = document.createElement('span');
    const dailySpan = document.createElement('span');

    function description_1() {

        const metronomeText = text_1.dataset.text;


        metroSpan.classList.add("project_descr");
        metroSpan.innerHTML = metronomeText;
        this.appendChild(metroSpan);


    }

    function removeDescription_1() {
        this.removeChild(metroSpan);

    }


    text_1.addEventListener("mouseover", description_1);
    text_1.addEventListener("mouseout", removeDescription_1)


    function description_2() {
        const sitText = text_2.dataset.text;

        sitSpan.classList.add("project_descr");
        sitSpan.innerHTML = sitText;
        this.appendChild(sitSpan);
    }

    function removeDescription_2() {

        this.removeChild(sitSpan);

    }

    text_2.addEventListener("mouseover", description_2);
    text_2.addEventListener("mouseout", removeDescription_2);


    function description_3() {

        const dailyText = text_3.dataset.text;

        dailySpan.classList.add("project_descr");
        dailySpan.innerHTML = dailyText;
        this.appendChild(dailySpan);
    }

    function removeDescription_3() {

        this.removeChild(dailySpan);

    }

    text_3.addEventListener("mouseover", description_3);
    text_3.addEventListener("mouseout", removeDescription_3);

}




document.addEventListener("DOMContentLoaded", init);