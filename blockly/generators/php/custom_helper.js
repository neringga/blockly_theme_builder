function removeLiterals(text) {
    if (text[0] != "'" && text[text.length - 1]  != "'") {
        return text
    }

    return text.substring(1, text.length - 1);
}