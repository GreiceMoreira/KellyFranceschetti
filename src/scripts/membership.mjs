const membershipData = {
    child: {
        title: "Beginner Crochet Membership",
        description: "Perfect for those new to crochet. Includes access to beginner tutorials, basic patterns, and a supportive community."
    },
    adult: {
        title: "Intermediate Crochet Membership",
        description: "Designed for those with some experience. Gain access to advanced patterns, exclusive workshops, and skill-building exercises."
    },
    granny: {
        title: "Advanced Crochet Membership",
        description: "For experienced crocheters. Enjoy masterclasses, complex patterns, personalized feedback, and professional networking opportunities."
    }
};

export function showMembershipInfo(membershipId) {
    const membership = membershipData[membershipId];
    if (membership) {
        document.getElementById("membershipTitle").textContent = membership.title;
        document.getElementById("membershipDescription").textContent = membership.description;
        document.getElementById("membershipModal").showModal();
    }
}