// Object containing data for each membership type
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

/**
 * Displays the membership information in a modal based on the selected membership ID.
 * @param {string} membershipId - The ID of the membership (e.g., 'child', 'adult', 'granny').
 */
export function showMembershipInfo(membershipId) {
    const membership = membershipData[membershipId];

    // If membership data exists, update modal content and display it
    if (membership) {
        document.getElementById("membershipTitle").textContent = membership.title;
        document.getElementById("membershipDescription").textContent = membership.description;
        document.getElementById("membershipModal").showModal();
    }
}