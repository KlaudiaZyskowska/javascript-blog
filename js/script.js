{ /* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

    const titleClickHandler = function () {
        event.preventDefault();
        console.log('Link was clicked!');
        console.log(event);

        /* [DONE] remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }

        /* [DONE] add class 'active' to the clicked link */
        event.preventDefault();

        const clickedElement = this;

        clickedElement.classList.add('active');

        console.log('clickedElement:', clickedElement);

        /* [DONE] remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.posts article.active');

        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }

        /* [DONE] get 'href' attribute from the clicked link */

        const articleSelector = clickedElement.getAttribute('href');

        /* [DONE] find the correct article using the selector (value of 'href' attribute) */

        const targetArticle = document.querySelector(articleSelector);

        /* [DONE] add class 'active' to the correct article */
        targetArticle.classList.add('active');

    }

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

    function generateTitleLinks() {

        const titleList = document.querySelector(optTitleListSelector);

        function clearMessages() {
            titleList.innerHTML = '';
        }

        clearMessages();

        const articles = document.querySelectorAll(optArticleSelector);

        let html = '';

        for (let article of articles) {

            const articleId = article.getAttribute('id');

            const articleTitle = article.querySelector(optTitleSelector).innerHTML;

            const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

            html = html + linkHTML;

        }

        titleList.innerHTML = html;

        console.log(html);

    }

    generateTitleLinks();

    const links = document.querySelectorAll('.titles a');

    console.log(links);

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}