import java.util.Arrays;
import java.util.Collections;

public class Q2 {

	public static void main(String[] args) {
		Integer[] arr = {0,1,2,3,4};
		Collections.rotate(Arrays.asList(arr), 2);
		System.out.println(Arrays.toString(arr)); 

	}

}
