exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityServiceLandingPage {
        edges {
          node {
            seoTitle
            seoDescription
            _rawRichText(resolveReferences: { maxDepth: 10 })
            bannerMessage {
              id
              image {
                _key
                alt
                asset {
                  url
                }
              }
              title
              ctaButton {
                _key
                title
                route
                link
              }
              _rawSimpleText(resolveReferences: { maxDepth: 10 })
            }
            slug
            title
            headerPage {
              image {
                asset {
                  id
                  url
                }
                alt
              }
              headerText
              cta {
                _key
                title
                route
                link
              }
              pageHeading
            }
            cardGrid {
              textField {
                cardGridHeading
                cardGridLink {
                  href
                  label
                }
                cardGridText
              }
              cards {
                title
                description
                image {
                  alt
                  asset {
                    url
                  }
                }
                link {
                  href
                  label
                }
              }
            }
            faqGroups {
              icon {
                name
                svg
                provider
              }
              title
              faqs {
                question
                _rawAnswer(resolveReferences: { maxDepth: 10 })
              }
            }
          }
        }
      }
      allSanityServicePage {
        edges {
          node {
            seoTitle
            seoDescription
            _rawRichText(resolveReferences: { maxDepth: 10 })
            bannerMessage {
              id
              image {
                _key
                alt
                asset {
                  url
                }
              }
              title
              ctaButton {
                _key
                title
                route
                link
              }
              _rawSimpleText(resolveReferences: { maxDepth: 10 })
            }
            slug
            title
            headerPage {
              image {
                asset {
                  id
                  url
                }
                alt
              }
              headerText
              cta {
                _key
                title
                route
                link
              }
              pageHeading
            }
            cardGrid {
              textField {
                cardGridHeading
                cardGridLink {
                  href
                  label
                }
                cardGridText
              }
              cards {
                title
                description
                image {
                  alt
                  asset {
                    url
                  }
                }
                link {
                  href
                  label
                }
              }
            }
          }
        }
      }
      allSanityLocationCentre {
        edges {
          node {
            id
            name
            slug
            state
            bookingURL
            seoTitle
            seoDescription
            locationId
            locationServices {
              insurance
              servicing
              paint
            }
            bannerImage {
              asset {
                url
              }
            }
            _rawIntroText
            bannerIcons {
              _id
              title
              icons {
                _key
                iconText
                iconTitle
                iconImage {
                  asset {
                    url
                  }
                }
              }
            }
            _rawLocationDetails
            _rawLocationDirections
            bannerMessage {
              id
              image {
                _key
                alt
                asset {
                  url
                }
              }
              title
              ctaButton {
                _key
                title
                route
                link
              }
              _rawSimpleText(resolveReferences: { maxDepth: 10 })
            }
            cardGrid {
              cards {
                title
                image {
                  alt
                  asset {
                    url
                  }
                }
                link {
                  label
                  href
                }
                description
              }
              textField {
                cardGridHeading
                cardGridText
                cardGridLink {
                  label
                  href
                }
              }
            }
            openingHours {
              _key
              _type
              day
              opensAt
              closesAt
            }
          }
        }
      }
      allSanityContentPage {
        edges {
          node {
            title
            slug
            seoTitle
            seoDescription
            _rawRichTextOne
            _rawRichTextTwo
            headerPage {
              image {
                asset {
                  id
                  url
                }
                alt
              }
              headerText
              cta {
                _key
                title
                route
                link
              }
              pageHeading
            }
            faqGroups {
              icon {
                name
                svg
                provider
              }
              title
              faqs {
                question
                _rawAnswer(resolveReferences: { maxDepth: 10 })
              }
            }
            bannerMessage {
              id
              image {
                _key
                alt
                asset {
                  url
                }
              }
              title
              ctaButton {
                _key
                title
                route
                link
              }
              _rawSimpleText(resolveReferences: { maxDepth: 10 })
            }
            bannerIcons {
              id
              title
              icons {
                iconImage {
                  alt
                  asset {
                    url
                  }
                }
                iconText
                iconTitle
                _key
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const serviceLandingPages =
    result.data.allSanityServiceLandingPage.edges || [];
  serviceLandingPages.forEach((edge) => {
    let path = `/${edge.node.slug}/`;
    createPage({
      path,
      component: require.resolve('./src/templates/service-page.js'),
      context: edge.node,
    });
  });

  const servicePages = result.data.allSanityServicePage.edges || [];
  servicePages.forEach((edge) => {
    let path = `/service/${edge.node.slug}/`;
    createPage({
      path,
      component: require.resolve('./src/templates/service-page.js'),
      context: edge.node,
    });
  });

  const contentPages = result.data.allSanityContentPage.edges || [];
  contentPages.forEach((edge) => {
    const path = `/${edge.node.slug}/`;
    createPage({
      path,
      component: require.resolve('./src/templates/content-page.js'),
      context: edge.node,
    });
  });

  const locations = result.data.allSanityLocationCentre.edges || [];
  locations.forEach((edge) => {
    const path = `/service-centres/${edge.node.state}/${edge.node.slug}/`;
    // Generate complete location URL for sitemap.xml
    // console.log(
    //   '<url>\n<loc>https://motorserve.com.au' +
    //     path +
    //     '</loc>\n<priority>0.65</priority>\n</url>'
    // );
    createPage({
      path,
      component: require.resolve('./src/templates/service-centre.js'),
      context: edge.node,
    });
  });

  const rawData = [
    {
      id: 'pathway1',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'The Chariot, The Taxi, Maximus, The Hercules',
      FIELD6: 4,
    },
    {
      id: 'pathway2',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Taz, The Limo, The Taxi, Maximus, Goliath, Gus, The Tank',
      FIELD6: 7,
    },
    {
      id: 'pathway3',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Beau, The Chariot, Maximus, The Hercules',
      FIELD6: 4,
    },
    {
      id: 'pathway4',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'The Chariot, The Taxi, The Hercules',
      FIELD6: 3,
    },
    {
      id: 'pathway5',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList:
        'Gramps, Einstein, Taz, The Taxi, The Chariot, The Hercules, Ash',
      FIELD6: 7,
    },
    {
      id: 'pathway6',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Gramps, Einstein, The Taxi, The Limo, The Hercules',
      FIELD6: 5,
    },
    {
      id: 'pathway7',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Cherry, Rhianna, Lola, Clara, Anna, Tillie',
      FIELD6: 6,
    },
    {
      id: 'pathway8',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Taz, The Limo, The Taxi, Maximus, Goliath, Gus, The Tank',
      FIELD6: 7,
    },
    {
      id: 'pathway9',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Dory, Topaz, Baby, Anna',
      FIELD6: 4,
    },
    {
      id: 'pathway10',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Tinkerbelle, Lizzy, The Limo, The Taxi',
      FIELD6: 4,
    },
    {
      id: 'pathway11',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList:
        "Adele, Princess, Daisy, Baby, Mum's Bus, Gracie, Tillie, Kylie",
      FIELD6: 8,
    },
    {
      id: 'pathway12',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Family taxi service',
      resultsList: "Princess, Daisy, Mum's Bus, Kylie",
      FIELD6: 4,
    },
    {
      id: 'pathway13',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Rhianna, The Taxi, Romy, The Hercules',
      FIELD6: 4,
    },
    {
      id: 'pathway14',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: "Taz, The Limo, Mum's Bus, The Hercules",
      FIELD6: 4,
    },
    {
      id: 'pathway15',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Topaz, Baby, Mums Bus, The Hercules',
      FIELD6: 4,
    },
    {
      id: 'pathway16',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: "The Chariot, The Taxi, Mum's Bus, The Hercules",
      FIELD6: 4,
    },
    {
      id: 'pathway17',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'Taz, The Taxi, The Chariot, The Hercules, Baby, Ash',
      FIELD6: 6,
    },
    {
      id: 'pathway18',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Family taxi service',
      resultsList: 'The Taxi, The Limo, The Hercules',
      FIELD6: 3,
    },
    {
      id: 'pathway19',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Jackson, Colt, Blaze, Hunter',
      FIELD6: 4,
    },
    {
      id: 'pathway20',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Rocky, The Dude, Angus',
      FIELD6: 3,
    },
    {
      id: 'pathway21',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList:
        'Rocky, Gus, Bluedini, Bluey, The Smurf, Steel, The Dude, Beau, The Duke',
      FIELD6: 9,
    },
    {
      id: 'pathway22',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Steel, Tinnie, Hunter',
      FIELD6: 3,
    },
    {
      id: 'pathway23',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Zeus, Gus, Jackson, Charlie',
      FIELD6: 4,
    },
    {
      id: 'pathway24',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'The Duke, Roadrunner, Jackson, Hunter',
      FIELD6: 4,
    },
    {
      id: 'pathway25',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList:
        'Rhianna, Debora, Christine, Lola, Ella, Anna, Tillie, Betsy',
      FIELD6: 8,
    },
    {
      id: 'pathway26',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Betty, Roller, Lola',
      FIELD6: 3,
    },
    {
      id: 'pathway27',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Bae, Buffy, Dory, Betty, Bella, Isla, Anna, Betsy',
      FIELD6: 8,
    },
    {
      id: 'pathway28',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Roller, Hot Wheels',
      FIELD6: 2,
    },
    {
      id: 'pathway29',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Princess, Daisy, Debora, Lily, Tillie, Kylie, Lyn',
      FIELD6: 7,
    },
    {
      id: 'pathway30',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Princess, Daisy, Kylie',
      FIELD6: 3,
    },
    {
      id: 'pathway31',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Roller, Roadrunner, Miles',
      FIELD6: 3,
    },
    {
      id: 'pathway32',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Roller, Roadrunner, Miles',
      FIELD6: 3,
    },
    {
      id: 'pathway33',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Bae, Bluedini, Bluey, The Smurf, Steel',
      FIELD6: 5,
    },
    {
      id: 'pathway34',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Steel, Roller, Miles',
      FIELD6: 3,
    },
    {
      id: 'pathway35',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Roller, Roadrunner, Miles',
      FIELD6: 3,
    },
    {
      id: 'pathway36',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Road-trips and adventures',
      resultsList: 'Roller, Roadrunner, Miles',
      FIELD6: 3,
    },
    {
      id: 'pathway37',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Roadrunner, The Bull, Fireball, Rocket, Hot Wheels, Blaze',
      FIELD6: 6,
    },
    {
      id: 'pathway38',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList:
        'Taz, Black Beauty, Blackhawk, The Bull, Bad Boy, Delirium, The Wolf, The Beast, Max, Colt',
      FIELD6: 10,
    },
    {
      id: 'pathway39',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Bad Boy, The Beast, Max',
      FIELD6: 3,
    },
    {
      id: 'pathway40',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Bolt, Speedy, Bullet, The Beast, Dash, Flash, Colt',
      FIELD6: 7,
    },
    {
      id: 'pathway41',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Bolt, Taz, Speedy, Roadrunner, Ash, Ace',
      FIELD6: 6,
    },
    {
      id: 'pathway42',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Delirium, Dash',
      FIELD6: 2,
    },
    {
      id: 'pathway43',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Ella, Furiosa, Raven, Cherry',
      FIELD6: 4,
    },
    {
      id: 'pathway44',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Furiosa, Black Beauty, Raven',
      FIELD6: 3,
    },
    {
      id: 'pathway45',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Hot Wheels, Furiosa, Mystique',
      FIELD6: 3,
    },
    {
      id: 'pathway46',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Elenore, Eliza, Furiosa',
      FIELD6: 3,
    },
    {
      id: 'pathway47',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Furiosa, Hot Wheels, Mystique',
      FIELD6: 3,
    },
    {
      id: 'pathway48',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Envy, Hot Wheels, Raven, Furiosa, Buffy',
      FIELD6: 5,
    },
    {
      id: 'pathway49',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Fireball, Rocket, Hot Wheels, Blaze, Cherry',
      FIELD6: 5,
    },
    {
      id: 'pathway50',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Taz, Blackhawk, Delirium, The Wolf, Raven',
      FIELD6: 5,
    },
    {
      id: 'pathway51',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Flash, Roadrunner, Bolt',
      FIELD6: 4,
    },
    {
      id: 'pathway52',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Speedy, Bullet, Mercury, Dash, Flash',
      FIELD6: 5,
    },
    {
      id: 'pathway53',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Taz, Speedy, Ash, Ace, Bolt',
      FIELD6: 6,
    },
    {
      id: 'pathway54',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Living life in the fast lane!',
      resultsList: 'Delirium, Dash, Envy, Bolt',
      FIELD6: 5,
    },
    {
      id: 'pathway55',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Maximus, Rusty, Godzilla, The Dude, Gus',
      FIELD6: 5,
    },
    {
      id: 'pathway56',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList:
        'The Tank, Goliath, Maximus, The Beast, Godzilla, The Dude, Gus',
      FIELD6: 7,
    },
    {
      id: 'pathway57',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Goliath, Gonzo, The Dude, Bluey',
      FIELD6: 4,
    },
    {
      id: 'pathway58',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'The Beast, Godzilla, The Dude, Gus',
      FIELD6: 4,
    },
    {
      id: 'pathway59',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList:
        'Apollo, The Tank, Gramps, Charlie, Al, Alf, Godzilla, The Dude',
      FIELD6: 8,
    },
    {
      id: 'pathway60',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Male',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Gramps, Godzilla, Alf, Godzilla, The Dude, Gus',
      FIELD6: 6,
    },
    {
      id: 'pathway61',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Rhianna, Gracie, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway62',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Silver, Gracie, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway63',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Ilsa, Clara, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway64',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Romy, Roller, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway65',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Ilsa, Clara, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway66',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Female',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Rhianna, Bella, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway67',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Ace, Rhianna, Honky',
      FIELD6: 3,
    },
    {
      id: 'pathway68',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'The Tank, Roller, Ace, Honky',
      FIELD6: 4,
    },
    {
      id: 'pathway69',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Al, Godzilla, Ace, Bluey, Jacko',
      FIELD6: 5,
    },
    {
      id: 'pathway70',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Romy, Roller, Ace, Honky',
      FIELD6: 4,
    },
    {
      id: 'pathway71',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'The Tank, Ace, Anna, Honky',
      FIELD6: 4,
    },
    {
      id: 'pathway72',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?':
        'Helping my friends move house... every weekend',
      resultsList: 'Alf, Ace, Anna, Honky, Gus, Jacko',
      FIELD6: 6,
    },
    {
      id: 'pathway73',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Drake, Luigi, Honky, Blaze, BLT, Payday',
      FIELD6: 6,
    },
    {
      id: 'pathway74',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList:
        'Black Beauty, Blackhawk, Goliath, Drake, The Wolf, Angus, Max, Payday',
      FIELD6: 9,
    },
    {
      id: 'pathway75',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList:
        'Goliath, Bluedini, Bluey, The Duke, The Hercules, BLT, Payday',
      FIELD6: 8,
    },
    {
      id: 'pathway76',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Speedy, Payday, Silver Fox, Sterling, Miles',
      FIELD6: 5,
    },
    {
      id: 'pathway77',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList:
        'Zeus, Casper, The Hercules, Honky, BLT, Jacko, Woody, Alf, Payday',
      FIELD6: 10,
    },
    {
      id: 'pathway78',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Male',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'The Hercules, BLT, Jacko, Woody, The Duke, Alf, Payday',
      FIELD6: 8,
    },
    {
      id: 'pathway79',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Clara, Envy, Kylie, Payday',
      FIELD6: 5,
    },
    {
      id: 'pathway80',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Black Beauty, Gracie, Anna, Payday',
      FIELD6: 5,
    },
    {
      id: 'pathway81',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Lola, Mystique, Kylie, Anna, Payday',
      FIELD6: 6,
    },
    {
      id: 'pathway82',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Mystique, Gracie, Kylie, Payday',
      FIELD6: 5,
    },
    {
      id: 'pathway83',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Gracie, Adele, Kylie, Payday',
      FIELD6: 5,
    },
    {
      id: 'pathway84',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Female',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Envy, Raven, Kylie, Payday, Buffy',
      FIELD6: 5,
    },
    {
      id: 'pathway85',
      'What colour is your car?': 'Red',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Honky, Blaze, Payday, Gus',
      FIELD6: 4,
    },
    {
      id: 'pathway86',
      'What colour is your car?': 'Black',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Blackhawk, The Wolf, Payday, Gus',
      FIELD6: 4,
    },
    {
      id: 'pathway87',
      'What colour is your car?': 'Blue',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Bluedini, Bluey, Payday, Gus',
      FIELD6: 4,
    },
    {
      id: 'pathway88',
      'What colour is your car?': 'Silver',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Speedy, Payday, Sterling, Flash, Payday',
      FIELD6: 6,
    },
    {
      id: 'pathway89',
      'What colour is your car?': 'White',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'Speedy, Payday, The Hercules, Honky, BLT, Payday',
      FIELD6: 7,
    },
    {
      id: 'pathway90',
      'What colour is your car?': 'Other',
      'What gender is your car?': 'Gender neutral',
      'What is your car most used for?': 'Bringing home the bacon',
      resultsList: 'The Hercules, BLT, Envy, Payday',
      FIELD6: 5,
    },
  ];

  const Pathway = (pathway) => {
    const x = {};
    x.id = pathway['id'];
    x.resultsList = [];
    const splitResults = pathway['resultsList'].split(',');
    for (let i = 0; i < splitResults.length; i++) {
      const name = splitResults[i];
      x.resultsList.push(name);
    }
    return x;
  };

  const getData = (pData) => {
    const dataList = [];
    for (let i = 0; i < pData.length; i++) {
      dataList.push(Pathway(pData[i]));
    }
    return dataList;
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };
  const allResults = () => {
    const data = getData(rawData);
    const resultsArray = [];
    for (let index = 0; index < data.length; index++) {
      const resultItem = data[index];
      for (
        let nameIndex = 0;
        nameIndex < resultItem.resultsList.length;
        nameIndex++
      ) {
        const name = resultItem.resultsList[nameIndex];
        resultsArray.push({ slug: slugify(name), name: name });
      }
    }
    return resultsArray;
  };

  if (process.env.QUIZ_ON === `true`) {
    createPage({
      path: `/namemycar`,
      component: require.resolve(`./src/nameMyCar/index.js`),
    });
    const results = allResults();
    results.forEach((thisName) => {
      const path = `/namemycar/${thisName.slug}/`;
      createPage({
        path,
        component: require.resolve('./src/nameMyCar/name-my-car-result.js'),
        context: thisName,
      });
    });
  }
};
