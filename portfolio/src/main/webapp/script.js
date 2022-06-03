// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomFunFact() {
    const fun1 = "I'm a big fan of Marvel and DC!";
    const fun2 = "I enjoy various of sports and traveling"
    const fun3 = "I love drawings and calligraphy"
    const fun4 = "I love to try new things and meet with new people"
    const fun5 = "Welcome to contact me anything to have some random chat!"
    const greetings =
        [fun1, fun2, fun3, fun4, fun5];
  
    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
  }
  