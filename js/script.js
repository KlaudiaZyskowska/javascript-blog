{

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
        optTitleListSelector = '.titles',
        optArticleTagsSelector = '.post-tags .list',
        optArticleAuthorSelector = '.post-author';

    function generateTitleLinks(customSelector = '') {

        const titleList = document.querySelector(optTitleListSelector);

        function clearMessages() {
            titleList.innerHTML = '';
        }

        clearMessages();

        const articles = document.querySelectorAll(optArticleSelector + customSelector);

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

    function generateTags() {

        const articles = document.querySelectorAll(optArticleSelector);

        for (let article of articles) {

            const tagWrapper = article.querySelector(optArticleTagsSelector);

            let html = '';

            const articleTags = article.getAttribute('data-tags');

            const articleTagsArray = articleTags.split(' ');

            for (let tag of articleTagsArray) {
                const linkHTML = '<li><a href="#tag-' + tag + '"> <span>' + tag + '</span> </a></li>';
                html = html + linkHTML;
            }

            tagWrapper.innerHTML = html;
        }

    }

    generateTags();

    const tagClickHandler = function (event) {

        event.preventDefault();

        const clickedElement = this;

        const href = clickedElement.getAttribute('href');

        const tag = href.replace('#tag-', '');

        const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

        for (let activeTag of activeTagLinks) {
            activeTag.classList.remove('active');
        }

        const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

        for (let tag of tagLinks); {
            tag.classList.add('active');
        }

        generateTitleLinks('[data-tags~="' + tag + '"]');

    }

    function addClickListenersToTags() {

        const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

        for (let tagLink of tagLinks) {
            tagLink.addEventListener('click', tagClickHandler);
        }

    }

    addClickListenersToTags();

    const generateAuthors = function () {

        const articles = document.querySelectorAll(optArticleSelector);

        for (let article of articles) {

            const authorWrapper = article.querySelector(optArticleAuthorSelector);

            let html = '';

            const articleAuthor = article.getAttribute('data-author');

            const linkHTML = '<li><a href="#author-' + articleAuthor  + '"><span>' + articleAuthor  + '</a></li>';

            html = html + linkHTML;

            authorWrapper.innerHTML = html;
        }
    }

    generateAuthors();

    const authorClickHandler = function (event) {

        event.preventDefault();

        const clickedElement = this;

        const href = clickedElement.getAttribute('href');

        const author = href.replace('#author-', '');

        const activeTagLinks = document.querySelectorAll('a.active[href^="#article-"]');

        for (let activeTag of activeTagLinks) {
            activeTag.classList.remove('active');
        }

        const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

        for (let tag of tagLinks) {
            tag.classList.add('active');
        }
        generateTitleLinks('[data-author="' + author + '"]');
    }

    const addClickListenersToAuthors = function () {

        const tagLinks = document.querySelectorAll('a[href^="#author-"]');

        for (let tagLink of tagLinks) {
            tagLink.addEventListener('click', authorClickHandler);
        }
    }

    addClickListenersToAuthors();

}