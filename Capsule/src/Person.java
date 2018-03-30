
public class Person {
	private String name=null;
	private int age=0;

	public Person(String name,int age){
		this.name=name;
		this.age=age;
	}

	public String getName(){
		return this.name;
	}
	public void setAge(int age){
		if(age>200){
			System.out.println("エラーです");
		}else{
			this.age=age;
		}
	}


}



