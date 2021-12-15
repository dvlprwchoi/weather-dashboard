function LocationInput() {
  return (
    <div className="location-input">
      <form className="locationInputBoxAndSubmitButton">
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
