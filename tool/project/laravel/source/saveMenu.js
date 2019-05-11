function formatMenuHtml(bookTitle, menuInfo) {
    let allGroupHtml = "<h1 class=\"toc-h1\">" + bookTitle + "</h1>\n" +
        "\t<div class=\"toc-main\">\n" +
        "\t<ul>\n";
    for (let menuGroupIndex = 0; menuGroupIndex < menuInfo.length; menuGroupIndex++) {
        let groupHtml = "\t\t<li class=\"toc-group toc-item\">\n";
        let groupInfo = menuInfo[menuGroupIndex];
        groupHtml += "\t\t\t<span class=\"toc-title\">" + groupInfo.title + "</span>\n";
        groupHtml += "\t\t\t<ol>\n";
        for (let i = 0; i < groupInfo.list.length; i++) {
            let pageNode = groupInfo.list[i];
            let pageUrl = pageNode.url;
            pageUrl = pageUrl.substr(0, pageUrl.indexOf('/')) + ".html";
            groupHtml += "\t\t\t\t<li class=\"toc-item\"><a href=\"" + pageUrl + "\">" + pageNode.title + "</a></li>\n";
        }
        groupHtml += "\t\t\t</ol>\n" +
            "\t\t</li>\n";
        allGroupHtml += groupHtml;
    }
    allGroupHtml += "\t</ul>\n\t</div>";
    return "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "  <head>\n" +
        "    <meta charset=\"utf-8\" />\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" />" +
        "    <title>" + bookTitle + "</title>\n" +
        "    <link rel=\"stylesheet\" href=\"../css/style.css\" />" +
        "    <link rel=\"stylesheet\" href=\"../css/menu-extra.css\" />" +
        "  </head>\n" +
        "  <body>\n" + allGroupHtml + "\n" +
        "<div class=\"menu-tip\" style=\"margin-left: 40px;\"><span>Generated by</span><a href=\"https://github.com/liuguangw/pdf-builder\">pdf-builder</a> </div>\n" +
        " </body>\n" +
        "</html>";
}

module.exports = (bookInfo, menuInfo, menuHtmlCallback, errorFn) => {
    let htmlCode = formatMenuHtml(bookInfo.title, menuInfo);
    menuHtmlCallback(htmlCode);
};