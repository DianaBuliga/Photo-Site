const router = async () => {
  const routes = [
      { path: "/", view: ()=> console.log("/") },
      { path: "/bag", view:()=> console.log("/bag")},
      { path: "/home", view:()=> console.log("/home")},
      { path: "/contact", view:()=> console.log("/contact")}
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
      return {
          route: route,
          result: location.pathname.match(pathToRegex(route.path))
      };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
      match = {
          route: routes[0],
          result: [location.pathname]
      };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});