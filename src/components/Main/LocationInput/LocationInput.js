function LocationInput({ location, _change, _submit }) {
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
            required
            onChange={_change}
            value={location}
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
