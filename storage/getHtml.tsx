export const htmlContent = (content: string) => {
  switch (content) {
    case "all_the_hats.html":
      return (
        <>
          <h2>Here is a brief list of basic hats:</h2>
          <table>
            <thead className="bg-gray-950">
              <tr>
                <td>Hat type</td>
                <td>Is it cool?</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Baseball Cap</td>
                <td>Yes, even more so if worn backwards</td>
              </tr>
              <tr>
                <td>Beanie</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Fedora</td>
                <td>Never</td>
              </tr>
              <tr>
                <td>Beret</td>
                <td>Yes, but only in france</td>
              </tr>
              <tr>
                <td>Panama</td>
                <td>
                  Yes, but only if you are in a 50's crime detective series
                </td>
              </tr>
              <tr>
                <td>Vizor</td>
                <td>No, a golfers hat</td>
              </tr>
              <tr>
                <td>Trapper</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Flat cap</td>
                <td>Yes, like in peaky blinders</td>
              </tr>
            </tbody>
          </table>
        </>
      );

    case "giraffe_conclusion.html":
      return (
        <>
          <h2>Conclusion</h2>
          <p>Overall we believe that Giraffe</p>
        </>
      );
    case "giraffes_as_horses.html":
      return (
        <>
          <h2>Could we replace horses with Giraffes?</h2>
          <p>
            It is strongly believed by absolutely everyone that we should
            replace horses with Giraffes for every purpose. Horse racing (I mean
            Giraffe racing) would be much more exciting if the animals were more
            gangly and more prone to falling over.
          </p>
        </>
      );
    case "giraffes_necks_argument.html":
      return (
        <>
          <h2>Giraffe necks</h2>
          <p>
            Giraffe necks, though scarily long, are very useful for eating
            leaves from high trees
          </p>

          <h3>The alternatives</h3>
          <p>
            Some would argue that instead of growing a long neck; the giraffes
            could instead purchase a long ladder to climb the trees with
          </p>
        </>
      );
    case "hats_spec.html":
      return (
        <>
          <h2>What are hats?</h2>

          <h3>What hats are for</h3>
          <ol>
            <li>Keeping your head warm</li>
            <li>Protecting from the sun</li>
            <li>When you forgot your sunglasses</li>
            <li>Looking cool</li>
          </ol>

          <h3>Whats hats are NOT for</h3>
          <ol>
            <li>Looking cool</li>
            <li>Wearing under a hood</li>
          </ol>
        </>
      );
    case "introduction_to_giraffes.html":
      return (
        <>
          <h2>Introduction</h2>
          <p>
            The giraffe is a large African hoofed mammal belonging to the genus
            Giraffa. It is the tallest living terrestrial animal and the largest
            ruminant on Earth. Traditionally, giraffes were thought to be one
            species, Giraffa camelopardalis, with nine subspecies. Most
            recently, researchers proposed dividing them into up to eight extant
            species due to new research into their mitochondrial and nuclear
            DNA, as well as morphological measurements. Seven other extinct
            species of Giraffa are known from the fossil record.{" "}
          </p>
        </>
      );
    case "lorum_ipsum_conclusion.html":
      return (
        <>
          <h2>What is?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </>
      );
    case "lorum_ipsum.html":
      return (
        <>
          <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>{" "}
        </>
      );
    case "s1.html":
      return (
        <>
          <h2>Secrets 1</h2>
          <p>Please enjoy reading my secrets:</p>

          <ul>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
            <li>CONTENT REDACTED</li>
          </ul>
        </>
      );
    case "s2.html":
      return (
        <>
          <h2>Less so secret secrets</h2>

          <ul>
            <li>Sometimes I like to </li>
          </ul>
        </>
      );
    case "the_need_for_hats.html":
      return (
        <>
          <h2>The need for hats</h2>
          <p>
            We need hats because they are a fantastic accessory that serve both
            functional and fashionable purposes.
          </p>
        </>
      );
    case "using_hats.html":
      return (
        <>
          <h2>Using Hats</h2>
          <p>
            Hats are easy to use. Once purchased (or loaned from your nearest
            hat rental store); hats can simply be placed on top of the head
            (paying close attention to the angle of purchase upon your head)
          </p>

          <code>this.hat = Hats.getHat(HatTypes.Beret); this.putOnHat();</code>
        </>
      );
  }
};
