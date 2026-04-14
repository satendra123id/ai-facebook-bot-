import axios from "axios"

export async function postToFacebook(imageUrl, meta, pageId, token) {

    try {

        const url = `https://graph.facebook.com/${pageId}/photos`

        const response = await axios.post(url, null, {
            params: {
                url: imageUrl,
                caption: `${meta.title}\n${meta.description}\n${meta.hashtags}`,
                access_token: token
            }
        })

        return {
            success: true,
            data: response.data
        }

    } catch (error) {

        return {
            success: false,
            error: error.message
        }

    }

}
