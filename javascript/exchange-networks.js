let stackNetworks = document.querySelector(".stack-networks");
let firstLinkList = stackNetworks.querySelector(".first-link-list");
let mainLinksBlocks = stackNetworks.querySelector(".exchange-networks");
let menuLinkList = firstLinkList.querySelector("ul");

let backButton = firstLinkList.querySelector(".exchange-network-icon");
backButton.addEventListener("click", () =>
    document.querySelector("footer").classList.remove("footer-linked")
);

let matcher = { menuLinkList, mainLinksBlocks };
menuLinkList.addEventListener("click", function (e) {
    if (e.target.tagName != "UL" && e.target.tagName != "DIV") {
        document.querySelector("footer").classList.add("footer-linked");
        Array.from(this.children).forEach((child) => {
            child.classList.remove("focus");
        });
        Array.from(matcher.mainLinksBlocks.children).forEach((child) => {
            child.classList.remove("focus");
        });
        if (e.target.tagName == "I") {
            e.target.parentNode.classList.add("focus");
            matcher.mainLinksBlocks.children[
                Array.from(matcher.menuLinkList.children).indexOf(e.target.parentNode)
            ].classList.add("focus");
        } else {
            e.target.classList.add("focus");
            matcher.mainLinksBlocks.children[
                Array.from(matcher.menuLinkList.children).indexOf(e.target)
            ].classList.add("focus");
        }
    }
});

