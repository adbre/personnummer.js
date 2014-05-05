describe("Personnummer", function () {
	it("Should validate a personnummer", function () {
	    expect(personnummer.isValid("640823-3234")).toBe(true);
	});
	
	it("Should validate personnummer with century", function () {
		expect(personnummer.isValid("19640883-3231")).toBe(true);
	});
	
	it("Should validate a personnumer with plus sign as separator", function () {
	    expect(personnummer.isValid("640823+3234")).toBe(true);
	});
	
	it("Should validate co-ordination number", function () {
		// From SKV 717B
		// http://www.skatteverket.se/privat/sjalvservice/blanketterbroschyrer/broschyrer/info/717b.4.39f16f103821c58f680008017.html
		//
		// "A co-ordination number, like a personal identity 
		// number, consists of ten digits. The first six
		// digits are based on the person's date of birth
		// with the difference that the number 60 is added to
		// the date of birth. For a person who is born on 23
		// August 1964, the first six digits in the
		// co-ordination number become 640883."
		//
		expect(personnummer.isValid("640883-3231")).toBe(true);
	});
	
	it("Should invalidate a empty string", function () {
		expect(personnummer.isValid("")).toBe(false);
	});
	
	it("Should invalidate a invalid personnummer", function () {
		expect(personnummer.isValid("112233-4455")).toBe(false);
	});
});
