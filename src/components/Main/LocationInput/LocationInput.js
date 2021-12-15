function LocationInput({ API_URL }) {
  // fetch(API_URL)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // const locationInput = document.querySelector('#location');

  const _submit = async (e) => {
    e.preventDefault();
    console.log('from the event');
    const zipCode = this.state.value;
    console.log(zipCode);

    try {
      const response = await fetch({ API_URL });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="location-input">
      <form className="locationInputBoxAndSubmitButton" onSubmit={_submit}>
        <label className="locationInputLabel" htmlFor="location">
          <input
            type="text"
            className="locationInputBox"
            placeholder="Find a city using city name or zip code"
            name="location"
            id="location"
          ></input>
        </label>
        <input
          type="submit"
          className="locationInputSubmitButton"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default LocationInput;
