import avatar from '@/assets/avatar.png'
import resume from '@/assets/resume.pdf'

const AboutConfig = {
    infocard: {
        header: {
            title: "How's it going? I'm Nathan",
            description: "Here's a little bit about me!"
        },
        content: {
            photo: avatar,
        },
        footer: {
            resumeFile: resume,
            socialLinks: {
                email: "mailto:nathancm@uci.edu",
                github: "https://www.github.com/nathancmendoza",
                linkedin: "https://www.linkedin.com/in/nathancmendoza"
            }
        }
    }
}

export default AboutConfig;