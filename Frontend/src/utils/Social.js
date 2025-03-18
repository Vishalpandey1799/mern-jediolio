export function socialmedianameextractor(link) {
            try {
                const hostname = new URL(link).hostname.replace("www.", "").split(".")[0];
                return hostname
            } catch (error) {
                return null;
            }
        } 




 


