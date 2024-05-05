

export default function generateQueryString(params: any, prefix = "") {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        const fullKey = prefix ? `${prefix}[${key}]` : key;
        if (typeof params[key] === "object" && params[key] !== null) {
            // If the value is an object, recursively generate query string for it
            const nestedParams = generateQueryString(params[key], fullKey);
            // Merge nestedParams with searchParams
            new URLSearchParams(nestedParams).forEach((value, name) => {
                searchParams.append(name, value);
            });
        } else {
            searchParams.append(fullKey, params[key]);
        }
    }

    return searchParams.toString();
}