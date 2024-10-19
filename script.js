import axios from "axios";

const queryParamsContainer = document.querySelector("[data-query-params]");
const requestHeadersContainer = document.querySelector("[data-query-headers]");
const keyValueTemplate = document.querySelector("[data-key-value-template]");

document
    .querySelector("[data-add-query-param-btn]")
    .addEventListener("click", () => {
        queryParamsContainer.append(createKeyValuePair());
    }
)

document
    .querySelector("[data-add-request-header-btn]")
    .addEventListener("click", () => {
        requestHeadersContainer.append(createKeyValuePair());
    }
)

queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.append(createKeyValuePair());

function createKeyValuePair() {
    const element = keyValueTemplate.content.cloneNode(true);
    element.querySelector("[data-remove-btn]").addEventListener("click", (e) => {
        e.target.closest("[data-key-value-pair]").remove()
    })
    return element;
}