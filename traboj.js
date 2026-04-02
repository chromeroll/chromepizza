
            const checkboxes = document.getElementsByName("sabor");

            function handleCheckboxChange() {
             const checkedCount = Array.from(checkboxes).filter(chk => chk.checked).length;

             if (checkedCount >= 3) {
          checkboxes.forEach(chk => {
             if (!chk.checked) {
             chk.disabled = true;
             }
              });
           } else {
              checkboxes.forEach(chk => chk.disabled = false);
           }
  }

        checkboxes.forEach(chk => {
            chk.addEventListener("change", handleCheckboxChange);
  });
